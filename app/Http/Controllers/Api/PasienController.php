<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
//Models
use App\Models\Pasien;

class PasienController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone_number' => 'required|string|max:15',
            'gender' => 'required|in:Male,Female',
            'date_of_birth' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Create the user
        $user = Pasien::create([
            'name' => $request->name,
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'gender' => $request->gender,
            'date_of_birth' => $request->date_of_birth,
        ]);

        return response()->json(['message' => 'Pasien created successfully', 'user' => $user], 201);
    }

    public function update(Request $request, $id)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone_number' => 'required|string|max:15',
            'gender' => 'required|in:Male,Female',
            'date_of_birth' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Create the user
        $user = Pasien::where('id', $id)
            ->update([
            'name' => $request->name,
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'gender' => $request->gender,
            'date_of_birth' => $request->date_of_birth,
        ]);

        return response()->json(['message' => 'Pasien update successfully', 'user' => $user], 201);
    }

    public function delete($id)
    {
        $rows = Pasien::findOrFail($id);
        $rows->delete();

        return response()->json(['message' => 'Pasien delete successfully'], 201);
    }

    public function json()
    {
        $data = Pasien::select('*')
                ->orderby('name', 'ASC')
                ->get();

        return $data;
    }
}
