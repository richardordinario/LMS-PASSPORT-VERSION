<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-white h-screen antialiased leading-none">
    <div id="app">
        {{-- <main-app></main-app> --}}
    </div>
    {{-- @if (Auth::guard('admin')->check() == true)
        <script>
            alert('admin')
            window.role = 'admin'
            console.log(window.role)
        </script>
    @endif --}}

    <script>
        // var admin = {!! json_encode(Auth::guard('admin')->user()); !!}
        // var teacher = {!! json_encode(Auth::guard('teacher')->user()); !!}
        // var user = {!! json_encode(Session::get('role')); !!}
        // admin ? window.role = 'admin' : (teacher ? window.role = 'teacher' : window.role = 'user')
        // console.log(admin)
        // console.log(teacher)
        // console.log(user)
        // if(admin == true) {
        //     window.role = 'admin'
        // }else if (teacher == true) {
        //     window.role = 'teacher'
        // }
        // console.log(window.role)
        // console.log(admin)
        //window.role = {!! json_encode(Auth::user()); !!}
        // if(admin){
        //     window.role = 'admin';
        // }else {
        //     window.role = 'user';
        // }
    </script>
    <script type="text/javascript" src="{{ mix('js/app.js')}}"></script>

</body>
</html>
