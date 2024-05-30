<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\EventSession;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class EventSessionController extends Controller
{
    function index(Request $request)
    {
        $data['page_title'] = 'Sesi Acara';
        $data['event_sessions'] = EventSession::withCount('invitations')->latest('id')->get();
        if ($request->edit) {
            $data['event_session_edit'] = EventSession::findOrFail($request->edit);
        }
        return Inertia::render('Admin/EventSession', $data);
    }

    function store(Request $request)
    {
        EventSession::create([
            'name' => $request->name,
            'begin_at' => $request->begin_at,
            'end_at' => $request->end_at,
        ]);

        Session::flash('notif_status', 'success');
        Session::flash('notif_message', 'Berhasil menambah data sesi acara "' . $request->name . '"');
    }

    function edit($event_session_id)
    {
        $event_session = EventSession::find($event_session_id);

        if (!$event_session) {
            $error_message = 'Gagal mencari data "Sesi Acara ID #' . $event_session_id . '"';
            Session::flash('notif_status', 'fail');
            Session::flash('notif_message', $error_message);

            $response = array(
                'error' => true,
                'message' => $error_message
            );
            $response_code = 200;
        } else {
            $response = array(
                'error' => false,
                'data' => $event_session
            );
            $response_code = 200;
        }

        return response()->json($response, $response_code);
    }

    function update(Request $request, $event_session_id)
    {
        $event_session = EventSession::find($event_session_id);
        if (!$event_session) {
            Session::flash('notif_status', 'danger');
            Session::flash('notif_message', 'Gagal mengubah data, data dengan ID #' . $event_session_id . ' tidak tidak ditemukan');
        }
        $event_session->update([
            'name' => $request->name,
            'begin_at' => $request->begin_at,
            'end_at' => $request->end_at,
        ]);
        Session::flash('notif_status', 'success');
        Session::flash('notif_message', 'Sukses mengubah data, Sesi Acara dengan nama"' . $event_session->name . '"');

        return to_route('admin.event_session.index');
    }

    function delete($event_session_id)
    {
        $event_session = EventSession::find($event_session_id);
        $invitations_count = Invitation::where('event_session_id', $event_session_id)->count();

        if ($invitations_count === 0) {
            if (!$event_session) {
                Session::flash('notif_status', 'fail');
                Session::flash('notif_message', 'Gagal menghapus data, data dengan ID #' . $event_session_id . ' tidak tidak ditemukan');
            }
            $event_session->delete();
            Session::flash('notif_status', 'success');
            Session::flash('notif_message', 'Sukses menghapus data, Sesi Acara dengan nama"' . $event_session->name . '"');
        } else {
            Session::flash('notif_status', 'fail');
            Session::flash('notif_message', 'Gagal menghapus data, Sesi Acara dengan nama"' . $event_session->name . '". Karena masih terhubung dengan data "Tamu Undangan"');
        }

        return to_route('admin.event_session.index');
    }
}
