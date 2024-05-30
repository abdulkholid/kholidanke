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
        $invitations = Invitation::with(['event_session:id,name'])->latest('id');
        $data['page_title'] = 'Tamu Undangan';
        $data['event_sessions'] = EventSession::latest('id')->get()->map(function ($result, $key) {
            return [
                'value' => $result->id,
                'text' => $result->name
            ];
        });
        $data['total_invitation'] = Invitation::count();
        $data['total_pax'] = Invitation::sum('pax');
        $data['invitations'] = $invitations->get();
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
    }
}
