{{-- this is basically like var_dump, but it will kill the script after this line --}}
{{-- @dd($posts); --}}

{{-- import the parent layout --}}
@extends('layouts.main')

{{-- insert this part as the container to the parent --}}
@section('container')
    <h1>{{ $title }}</h1>

    @foreach ($categories as $category)
        <ul>
            <li>
                <h2><a class="text-decoration-none" href="/categories/{{ $category->slug }}">{{ $category->name }}</a></h2>
            </li>
        </ul>
    @endforeach


@endsection
