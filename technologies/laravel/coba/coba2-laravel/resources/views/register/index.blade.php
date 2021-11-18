@extends('layouts.main')

@section('container')
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <main class="form-registration">
                <h1 class="h3 mb-3 fw-normal text-center">Registration Form</h1>
                <form action="/register" method="POST">
                    {{-- this is to prevent csrf attack --}}
                    @csrf

                    <div class="form-floating">

                        {{-- @error is related to laravel post validation.
                            if there's an error in field  --}}
                        <input required type="text" name="name" id="name" class="@error('name') is-invalid @enderror rounded-top form-control" id="floatingInput" placeholder="Example Name">
                        <label for="floatingInput" value="{{ old('name') }}">Name</label>
                        @error('name')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror

                    </div>

                    <div class="form-floating">

                        <input required type="text" name="username" id="username" class="@error('username') is-invalid @enderror form-control" id="floatingInput" placeholder="Username" value="{{ old('username') }}">
                        <label for="floatingInput">Username</label>
                        @error('username')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror

                    </div>

                    <div class="form-floating">

                        <input required type="email" name="email" id="email" class="@error('email') is-invalid @enderror form-control" id="floatingInput" placeholder="name@example.com" value="{{ old('email') }}">
                        <label for="floatingInput">Email address</label>
                        @error('email')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror

                    </div>

                    <div class="form-floating">

                        <input required type="password" name="password" id="password" class="@error('password') is-invalid @enderror rounded-bottom form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                        @error('password')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror

                    </div>

                    <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Login</button>
                </form>
                <small class="d-block text-center mt-3">Already registered? <a href="/login">Login here!</a></small>
            </main>
        </div>
    </div>

@endsection
