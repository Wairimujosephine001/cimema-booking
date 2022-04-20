function submitForm(){
    let avMovie = document.getElementById('avMovie').value
    //document.getElementById('movieInfo').innerHTML = '<div class="alert alert-danger" role="alert"> Your selected available movie is: '+avMovie+'</div>'
   
    let timMovie = document.getElementById('timmovie').value

    //document.getElementById('timeInfo').innerHTML = '<div class="alert alert-danger" role="alert"> Your selected available time is: '+timMovie+'</div>'

    let ticMovie = document.getElementById('ticmovie').value

   // document.getElementById('ticketInfo').innerHTML = '<div class="alert alert-danger" role="alert"> Your selected available time is: '+ticMovie+'</div>'

    let payMovie = document.getElementById('paymovie').value

    document.getElementById('movieInfo').innerHTML = '<div class="alert alert-danger" role="alert""> Your selected movie is: <span class="text-success">'+avMovie+'</span> you selected time : <span class="text-info">'+timMovie+'</span> And ticket info is <span class="text-primary">'+ticMovie+' And payment info <span class="text-primary">'+payMovie+'</span></span> </div>'
    
} 


      