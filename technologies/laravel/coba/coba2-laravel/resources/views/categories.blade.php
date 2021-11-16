{{-- this is basically like var_dump, but it will kill the script after this line --}}
{{-- @dd($posts); --}}

{{-- import the parent layout --}}
@extends('layouts.main')

{{-- insert this part as the container to the parent --}}
@section('container')
    <h1>{{ $title }}</h1>

    <div class="container">
        <div class="row">
            @foreach ($categories as $category)

                <div class="col-md-4">
                    <a href="/categories/{{ $category->slug }}">
                        <div class="card bg-dark text-white">
                            <img src="https://source.unsplash.com/500x300?${{ $category->name }}" class="card-img"
                                alt="{{ $category->name }}">
                            <div class="card-img-overlay d-flex p-0 align-items-center">
                                <h5 class="card-title fs-3 flex-fill text-center py-2"
                                    style="background-color: rgba(0, 0, 0, 0.7)">{{ $category->name }}</h5>
                            </div>
                        </div>
                    </a>
                </div>
            @endforeach
        </div>
    </div>

@endsection
