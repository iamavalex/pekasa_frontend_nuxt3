<template>
    <div class="flex flex-col items-center justify-center px-4">
        <div class="w-full max-w-screen-md space-y-10">
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Basic information</h2>
                    <div class="flex space-x-2">
                        <input type="text" placeholder="Name" class="input input-bordered input-primary w-1/2" />
                        <input type="text" placeholder="email" class="input input-bordered input-primary w-1/2" />
                    </div>
                    <div class="flex space-x-2 mt-2">
                        <input type="text" placeholder="Address" class="input input-bordered input-primary w-3/4" />

                        <input type="text" placeholder="ZIP" class="input input-bordered input-primary w-1/4" />
                    </div>

                    <div class="flex space-x-2 mt-2">
                        <input type="text" placeholder="Country" class="input input-bordered input-primary w-1/2" />
                        <input type="text" placeholder="City" class="input input-bordered input-primary w-1/2" />
                    </div>


                </div>
            </div>
            <div class="flex card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Change password</h2>
                    <div class="flex">
                        <input type="text" placeholder="Current password"
                            class="input input-bordered input-primary w-full" />
                    </div>
                    <div class="flex">
                        <input type="text" placeholder="New password" class="input input-bordered input-primary w-full" />
                    </div>
                    <div class="flex">
                        <input type="text" placeholder="Confirm new password"
                            class="input input-bordered input-primary w-full" />
                    </div>
                    <div class="flex justify-center">
                        <button class="btn btn-primary text-white">Change password</button>
                    </div>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Notifications</h2>
                    <div class="form-control flex space-x-2">
                        <label class="label cursor-pointer">
                            <span class="label-text text-lg">Receive notifications about <span class="font-bold">incoming
                                    invoices</span>.</span>
                            <input type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                    </div>
                    <div class="form-control flex space-x-2">
                        <label class="label cursor-pointer">
                            <span class="label-text text-lg">Receive notifications about <span class="font-bold">news</span>
                                and <span class="font-bold">updates</span>.</span>
                            <input type="checkbox" class="checkbox checkbox-primary" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-4">
            <button class="btn btn-wide btn-primary text-white">Save</button>
        </div>
    </div>
</template>
