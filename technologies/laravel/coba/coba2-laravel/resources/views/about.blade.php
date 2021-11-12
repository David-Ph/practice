{{-- import the parent layout --}}
@extends('layouts.main')

{{-- insert this part as the container to the parent --}}
@section('container')
    <h1>About</h1>
    <h3>Hi! I'm {{ $name }}!</h3>
    <p>I'm a {{ $job }}</p>
    <p>You can contact me at {{ $email }}</p>
@endsection
