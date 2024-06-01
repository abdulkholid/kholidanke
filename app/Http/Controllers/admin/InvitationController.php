<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\EventSession;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class InvitationController extends Controller
{
    function index(Request $request)
    {
        $data['page_title'] = 'Tamu Undangan';
        $data['event_sessions'] = EventSession::get()->map(function ($result) {
            return [
                'value' => $result->id,
                'text' => $result->name
            ];
        });
        $invitations = Invitation::with(['event_session:id,name']);
        if ($request->name) {
            $invitations = $invitations->where('name', 'LIKE', '%' . str_replace("%20", " ", $request->name) . '%');
        }
        if ($request->event_session_id) {
            $invitations = $invitations->where('event_session_id', $request->event_session_id);
        }
        $data['invitations'] = $invitations->orderBy('id', 'desc')->get();
        $data['total_invitation'] = Invitation::count();
        $data['total_pax'] = Invitation::sum('pax');
        if ($request->edit) {
            $data['invitation_edit'] = Invitation::findOrFail($request->edit);
        }

        return Inertia::render('Admin/Invitation', $data);
    }

    function store(Request $request)
    {
        Invitation::create([
            'name' => $request->name,
            'pax' => $request->pax,
            'event_session_id' => $request->event_session_id,
        ]);

        Session::flash('notif_status', 'success');
        Session::flash('notif_message', 'Sukses menambahkan data Undangan atas nama "' . $request->name . '"');
        return to_route('admin.invitation.index');
    }

    function update(Request $request, $invitation_id)
    {
        Invitation::findOrFail($invitation_id)->update([
            'name' => $request->name,
            'event_session_id' => $request->event_session_id,
            'pax' => $request->pax,
        ]);

        Session::flash('notif_status', 'success');
        Session::flash('notif_message', 'Sukses mengubah data Undangan atas nama "' . $request->name . '"');
        return to_route('admin.invitation.index');
    }

    function delete($invitation_id)
    {
        $invitation = Invitation::findOrFail($invitation_id);
        $name = $invitation->name;
        $invitation->delete();

        Session::flash('notif_status', 'success');
        Session::flash('notif_message', 'Sukses menghapus data Undangan atas nama "' . $name . '"');
        return to_route('admin.invitation.index');
    }

    function share($id)
    {
        $invitation = Invitation::findOrFail($id);

        return response()->json($invitation, 200);
    }
}
