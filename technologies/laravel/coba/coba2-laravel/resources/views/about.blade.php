{{-- import the parent layout --}}
@extends('layouts.main')

{{-- insert this part as the container to the parent --}}
@section('container')
    <h1>About</h1>
    <h3>Hi! I'm {{ $name }}!</h3>
    <p>I'm a {{ $job }}</p>
    <p>You can contact me at {{ $email }}</p>
@endsection
{{-- 
Post::create([
    "title" => "Judul Pertama",
    "category_id" => 1,
    "slug" => "judul-pertama",
    "excerpt" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur porro adipisci, velit maxime autem rerum possimus ab vel voluptates cumque saepe, iusto voluptate pariatur quis consequuntur ullam, suscipit placeat.",
    "body" => "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat. Modi iure cumque aliquid sunt laborum sapiente, officiis deserunt asperiores minus sint excepturi? Eligendi sint eum porro possimus repellendus esse numquam temporibus quasi itaque ratione. Mollitia obcaecati illum iusto quod sed! Quam exercitationem excepturi odio.</p><p> Neque corporis enim totam. Voluptas veniam blanditiis recusandae quasi esse. Expedita labore totam neque soluta. Quo eveniet eius placeat! Harum nulla unde itaque ab illum veniam repellat corporis maiores dolor ex, corrupti, nesciunt, alias possimus nemo voluptate et exercitationem doloremque repudiandae impedit iste ipsum in. Animi, molestias autem commodi adipisci odio corrupti, ducimus dolores qui doloremque ad nemo ratione consectetur hic modi assumenda quam delectus quibusdam blanditiis provident, eum dignissimos at. Dignissimos cupiditate id illum.</p>"
])
 --}}
