{{-- this is basically like var_dump, but it will kill the script after this line --}}
{{-- @dd($posts); --}}

{{-- import the parent layout --}}
@extends('layouts.main')

{{-- insert this part as the container to the parent --}}
@section('container')
    <h1 class="mb-5">{{ $title }}</h1>
    @if ($posts->count())
        <div class="card mb-3">
            <img src="https://source.unsplash.com/1200x400?${{ $posts[0]->category->name }}" class="card-img-top"
                alt="{{ $posts[0]->category->name }}">
            <div class="card-body text-center">
                <h3 class="card-title"><a href="/posts/{{ $posts[0]->slug }}"
                        class="text-decoration-none text-dark">{{ $posts[0]->title }}</a></h3>
                <p>
                    <small class="text-muted">Written by <a class="text-decoration-nones"
                            href="/authors/{{ $posts[0]->author->username }}">{{ $posts[0]->author->name }}</a> in
                        <a class="text-decoration-none"
                            href="/categories/{{ $posts[0]->category->slug }}">{{ $posts[0]->category->name }}</a>
                        {{ $posts[0]->created_at->diffForHumans() }}
                    </small>
                </p>
                <p class="card-text">{{ $posts[0]->excerpt }}</p>
                <a a href="/posts/{{ $posts[0]->slug }}" class="text-decoration-none btn btn-primary">Read more...</a>
            </div>
        </div>
    @else
        <p class="text-center fs-4">No post found.</p>
    @endif

    <div class="container">
        <div class="row">
            @foreach ($posts as $post)
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="position-absolute bg-dark p-2 text-white"><a class="text-decoration-none text-white" href="/categories/{{ $post->category->slug }}">{{ $post->category->name }}</a></div>
                        <img src="https://source.unsplash.com/500x300?${{ $post->category->name }}"
                            class="card-img-top" alt="{{ $post->category->name }}">
                        <div class="card-body">
                            <h5 class="card-title"><a href="/posts/{{ $post->slug }}"
                                    class="text-decoration-none text-dark">{{ $post->title }}</a></h5>

                            <p>
                                <small class="text-muted">Written by <a class="text-decoration-nones"
                                        href="/authors/{{ $post->author->username }}">{{ $post->author->name }}</a>
                                    {{ $post->created_at->diffForHumans() }}
                                </small>
                            </p>

                            <p class="card-text">{{ $post->excerpt }}</p>
                            <a href="/posts/{{ $post->slug }}" class="btn btn-primary">Read more...</a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

@endsection
