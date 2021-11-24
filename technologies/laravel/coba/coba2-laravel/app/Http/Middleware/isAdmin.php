<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class isAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    // we write our logic here
    public function handle(Request $request, Closure $next)
    {
        if(auth()->guest() || auth()->user()->username !== 'maomao'){
            abort(403);
        }

        return $next($request);
    }
}
