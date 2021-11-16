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
? php artisan make:model -m Post

to run migration
? php artisan migrate

to rollback migration 
? php artisan migrate:rollback

to do both, rollback and run migration
? php artisan migrate:fresh

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

*/