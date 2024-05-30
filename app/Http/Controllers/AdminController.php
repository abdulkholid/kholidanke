<?php

namespace App\Http\Controllers;

use App\Models\EventSession;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AdminController extends Controller
{
    function dashboard()
    {
        $data['page_title'] = 'Dasbor';
        return Inertia::render('Admin/Dashboard', $data);
    }
}
