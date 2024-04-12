/* custom */
$(document).ready(function() {
    $('#players_btn').click(function(event) {
        $('.rt_btn').removeClass('rt_btn_active');
        $('.rt_table').removeClass('active');
        $('.rt_table.players').toggleClass('active');
        $('#players_btn').toggleClass('rt_btn_active');
        $('.newbies_date').removeClass('active');
    });
    $('#guilds_btn').click(function(event) {
        $('.rt_btn').removeClass('rt_btn_active');
        $('.rt_table').removeClass('active');
        $('.rt_table.guilds').toggleClass('active');
        $('#guilds_btn').toggleClass('rt_btn_active');
        $('.newbies_date').removeClass('active');
    });
    $('#newbies_btn').click(function(event) {
        $('.rt_btn').removeClass('rt_btn_active');
        $('.rt_table').removeClass('active');
        $('.rt_table.newbies').toggleClass('active');
        $('#newbies_btn').toggleClass('rt_btn_active');
        $('.newbies_date').toggleClass('active');
    });
});