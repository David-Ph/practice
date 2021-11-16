{{-- this is basically like var_dump, but it will kill the script after this line --}}
{{-- @dd($posts); --}}

{{-- import the parent layout --}}
@extends('layouts.main')

{{-- insert this part as the container to the parent --}}
@section('container')
    <h1>Post category: {{ $category }}</h1>

    @foreach ($posts as $post)
        <article class="mb-5 border-bottom pb-4">
            <h2><a class="text-decoration-none" href="/posts/{{ $post->slug }}">{{ $post->title }}</a></h2>

            <h5>Written by MaoMao in
                <a class="text-decoration-none"
                    href="/categories/{{ $post->category->slug }}">{{ $post->category->name }}</a>
            </h5>

            <p>{{ $post->excerpt }}</p>
            <a a href="/posts/{{ $post->slug }}" class="text-decoration-none">Read more...</a>

        </article>
    @endforeach


@endsection