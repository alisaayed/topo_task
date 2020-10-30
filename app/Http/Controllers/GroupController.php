<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Group::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $group = new Group;
        $group->name = $request->name;
        $group->save();
        return $group;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function show(Group $group)
    {
        //
        return $group->users;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Group $group)
    {
        //
        $group->name = $request->name;
        $group->save();
        return $group;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function destroy(Group $group)
    {
        //
        Group::destroy($group->id);
        return 'deleted';
    }

    public function userList($id)
    {
        return Group::find($id)->users;
    }

    public function userAdd($id, $uid)
    {
        Group::find($id)->users()->attach($uid);
        return Group::find($id)->users;
    }

    public function userDelete($id, $uid)
    {
        Group::find($id)->users()->detach($uid);
        return Group::find($id)->users;
    }
}
