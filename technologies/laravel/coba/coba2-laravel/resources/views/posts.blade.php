{{-- this is basically like var_dump, but it will kill the script after this line --}}
{{-- @dd($posts); --}}

{{-- import the parent layout --}}
@extends('layouts.main')

{{-- insert this part as the container to the parent --}}
@section('container')
    <h1>Posts</h1>

    @foreach ($posts as $post)
        <article class="mb-5">
            <h2><a href="/posts/{{ $post->slug }}">{{ $post->title }}</a></h2>
            <h5>By: {{ $post->author }}</h5>
            <p>{{ $post->excerpt }}</p>
        </article>
    @endforeach


@endsection
