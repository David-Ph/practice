@extends('layouts.main')

@section('container')

    <div class="container">
        <div class="row justify-content-center mb-5">
            <div class="col-md-8">
                <h1 class="mb-3">{{ $post->title }}</h1>
                <a href="/blog">Back to posts</a>

                <h5>Written by <a class="text-decoration-none"
                        href="/blog?author={{ $post->author->username }}">{{ $post->author->name }}</a> in <a
                        href="/blog?category={{ $post->category->slug }}">{{ $post->category->name }}</a></h5>

                @if ($post->image)
                    <div style="max-height: 400px; overflow: hidden;">
                        <img src="{{ asset('storage/' . $post->image) }}" class="img-fluid mt-3"
                            alt="{{ $post->category->name }}">
                    </div>
                @else
                    <img src="https://source.unsplash.com/1200x400?${{ $post->category->name }}" class="img-fluid"
                        alt="{{ $post->category->name }}">
                @endif



                <article class="my-3 fs-5">
                    {!! $post->body !!}
                </article>
            </div>
        </div>
    </div>
@endsection
