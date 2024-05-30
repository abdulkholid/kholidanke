<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Option;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SettingController extends Controller
{
    function index()
    {
        $data['page_title'] = "Settings";
        $data['options'] = self::__get_options(['logo']);
        return Inertia::render("Admin/Setting/Index", $data);
    }

    function index_submit(Request $request)
    {
        $old_option = Option::where('name', 'logo');
        $old_data = json_decode($old_option->first()->value, true);

        $data = [
            'light' => @$old_data['light'] ? $old_data['light'] : '',
            'dark' => @$old_data['dark'] ? $old_data['dark'] : '',
        ];

        if ($request->file('light')) {
            $data['light'] = Storage::disk('public_upload')->put('options/logos', $request->file('light'));
            if ($old_data['light'] != "" && file_exists('./uploads/' . $old_data['light'])) {
                unlink('./uploads/' . $old_data['light']);
            }
        }

        if ($request->file('dark')) {
            $data['dark'] = Storage::disk('public_upload')->put('options/logos', $request->file('dark'));
        }

        Option::where('name', 'logo')->update(['value' => json_encode($data)]);

        Session::flash('notif_status', 'success');
        Session::flash('notif_message', 'File logo berhasil diupload');
    }
}
