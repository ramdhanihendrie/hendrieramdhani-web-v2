<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Certificates;
use Illuminate\Http\Request;

class CertificatesController extends Controller
{
    public function index()
    {
        $certificates = Certificates::get();
        return $certificates;
    }
}
