<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Authenticator;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
    /**
     * @var Authenticator
     */
    private $authenticator;

    public function __construct(Authenticator $authenticator)
    {
        $this->authenticator = $authenticator;
    }

    /**
     * @param Request $request
     * @return array
     * @throws AuthenticationException
     */
    public function login(Request $request)
    {
        $credentials = array_values($request->only('email', 'password', 'provider'));

        if (! $user = $this->authenticator->attempt(...$credentials)) {
            throw new AuthenticationException();
        }

        $token = $user->createToken($request->provider)->accessToken;

        return [
            'token_type' => 'Bearer',
            'access_token' => $token,
            'user' => $user
        ];
    }

    public function provider()
    {
        if(Auth::guard('admin')->check()) {
            $role = 'admin';
        }else if(Auth::guard('teacher')->check()) {
            $role = 'teacher';
        }else {
            $role = 'user';
        }
        return response()->json($role);
    }
}
