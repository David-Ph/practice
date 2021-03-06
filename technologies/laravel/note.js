// php notes

/* 

To create a new laravel project
? laravel new example-app

To serve the web server
? php artisan serve

General flow of request should be 
? Routes => Controller => Models => Views 

To create new model => php artisan make:model <MODEL NAME>
? php artisan make:model Post

For normal routes, you can set it in routes/web.php. This is similar to routers in nodejs

views template engine will be in resources/views
you can also set partials with include, section, yield, extends etc

! in laravel, you can turn array into a collection
this is basically array with a lot of extra functionality

in php, you can use self::StaticProperties to call static properties from its own class
but for method, you need to use static::StaticMethod 

where is migration file stored?
? dataabase/migrations

how to create model?
the -m flag means to also create migration for it
-f means to create factory, -s means to also create seeders
? php artisan make:model -mfs Post

to run migration
? php artisan migrate

to rollback migration 
? php artisan migrate:rollback

to do both, rollback and run migration
? php artisan migrate:fresh
? php artisan migrate:fresh --seed

To interact with your app directly
for example, you can create a new row for a table
? php artisan tinker

Example of php artisan tinker with eloquent
$user = new App\Models\User;
$user->name = "david";
$user->save() // create new user
$user->all() // get all  ( this is collection method )

create at once
? Post::create([
        "title" => "Judul ke tiga",
        "slug" => "judul-ke-tiga",
        "excerpt" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque sapiente, iusto reiciendis est consequatur, ipsa animi quas labore recusandae doloribus error eius esse odio fugiat dicta temporibus accusantium doloremque et nam?",
        "body" => "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque sapiente, iusto reiciendis est consequatur, ipsa animi quas labore recusandae doloribus error eius esse odio fugiat dicta temporibus accusantium doloremque et nam? Commodi provident eius fugit est delectus nisi doloremque animi voluptates. Iste provident quasi,</p><p> a nemo consequatur soluta enim magnam ad maiores asperiores temporibus repellendus pariatur nesciunt eos cumque perferendis corporis fugit amet, debitis minus maxime dolores? Et quia rem, voluptate quod officia aut dolores repellendus amet mollitia eius vel reprehenderit error praesentium adipisci maiores distinctio natus? Necessitatibus velit eum nam, dolorem omnis voluptatibus soluta sunt fugit! Doloremque, aspernatur?</p>" 
    ]
)

example if you want to update
? Post::where("id", 1)->update("title", "change the title");

example if you want to get
? Post::where("category_id", 1)->get();

by default, seeder is stored in DatabaseSeeder.php, to run it
? php artisan db:seed

we can create our own factory for seeding purpose
? php artisan make:factory PostFactory

In Laravel, by default is using lazy loading, this means that laravel will only queries for something when it needs them. This can be bad if you want to query a table from another table. For example, when queueing for posts, you also want the authors and categories data. If you do a loop for this, this means that for every loop, laravel will do another query to the database. This can lead to performance issue.
This is why Laravel provides eager loading or eager lazy loading, so it will queries all of them from the start
if you query from parent only, like in controller
? "posts" => Post::with(["author", "category"])->latest()->get()
if you query from implicit binding
? 'posts' => $category->posts->load("category", "author"),

! learn more about query scope / local scope in laravel!!!

by convention, each controller should go into one folder

insert this in the form to prevent csrf attack
basically, how it works is, by inserting this in the form, we're automatically sending a csrf token
together with the form,and then laravel will check the token and check if it's valid
@csrf

you can validate request through from
? $validated = $request->validate([
?             'name' => 'required|max:255',
?             'username' => ['required', 'min:3', 'max:255', 'unique:users'],
?             'email' => 'required|email|unique:users',
?             'password' => 'required|min:5|max:255'
?         ]);

for flash message
? $request->session()->flash("success", "Registration successful! Please login");
? return back()->with("loginError", "Login failed");

? route::get('/login', [LoginController::class, "index"])->middleware('guest');

{{-- check if user has login, we can use @guest or @auth --}}

 this is some magic function
    so when you want to GET ONE 
    it will automatically use 'slug' instead of id
?    public function getRouteKeyName(){
?        return 'slug';
?    }

by default, this will save into storage/post-images
?$request->file('image')->store('post-images');
we can change in a file called filesystems.php

by default, even if you store it in /storage/app/public, you still can't access it from the app
to do it, you need to link it to /public, the command is
? php artisan storage:link
and then you can access it with
? echo asset('storage/post-image/photo.jpeg')

to create a new migration
php artisan make:migration add_is_admin_to_users_table
*/