<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    function dashboard()
    {
        $data['page_title'] = 'Dasbor Admin';
        return Inertia::render('Admin/Dashboard', $data);
    }
}
