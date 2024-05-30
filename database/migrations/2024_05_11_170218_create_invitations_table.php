<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('event_session_id')->unsigned();
            $table->string('uuid');
            $table->string('name');
            $table->integer('pax');
            $table->timestamps();

            $table->foreign('event_session_id')->references('id')->on('event_sessions');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->dropForeign('invitations_event_session_id_foreign');
            $table->dropIndex('invitations_event_session_id_foreign');
        });
        Schema::dropIfExists('invitations');
    }
};
