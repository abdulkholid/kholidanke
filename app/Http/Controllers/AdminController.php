<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    function dashboard()
    {
        $data['page_title'] = 'Dasbor';
        return Inertia::render('Admin/Dashboard', $data);
    }

    function event_session()
    {
        $data['page_title'] = 'Sesi Acara';
        return Inertia::render('Admin/EventSession', $data);
    }
}
