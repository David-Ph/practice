@extends('layouts.main')

@section('container')
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <main class="form-registration">
                <h1 class="h3 mb-3 fw-normal text-center">Registration Form</h1>
                <form>

                    <div class="form-floating">
                        <input type="text" name="name" id="name" class="rounded-top form-control" id="floatingInput" placeholder="Example Name">
                        <label for="floatingInput">Name</label>
                    </div>

                    <div class="form-floating">
                        <input type="text" name="username" id="username" class="form-control" id="floatingInput" placeholder="Username">
                        <label for="floatingInput">Username</label>
                    </div>

                    <div class="form-floating">
                        <input type="email" name="email" id="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating">
                        <input type="password" name="password" id="password" class="rounded-bottom form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Login</button>
                </form>
                <small class="d-block text-center mt-3">Already registered? <a href="/login">Login here!</a></small>
            </main>
        </div>
    </div>

@endsection
