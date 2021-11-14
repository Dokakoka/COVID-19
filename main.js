fetch('https://api.covid19api.com/summary').then((data)=>{return data.json()}).then((data)=>{display(data)})

function display(data) {
    var nav = document.getElementById('navo');

    document.write("<!DOCTYPE html>")
    document.write("<link rel='stylesheet' href='css/bootstrap.css'>")
    document.write("<link rel='stylesheet' href='css/style.css'>")

    document.write("<body id='body'>")
    var body = document.getElementById('body')

    body.appendChild(nav)
document.write("<div class='container'>")

    document.write("<h1 class='text-success'>Corona Virus Cases: " + data.Global.TotalConfirmed + "</h1>")
    document.write("<h1 class='text-danger'>Total Deaths: " + data.Global.TotalDeaths + "</h1>")
    document.write("<h1>Total Recovered: " + data.Global.TotalRecovered + "</h1>")

    document.write("<br>")
    document.write("<table class='table-hover table-bordered'>")

    document.write("<th class='px-3 py-3'>Country</th>")
    document.write("<th>Total Cases</th>")
    document.write("<th>New Cases</th>")
    document.write("<th>Total Deaths</th>")
    document.write("<th>New Deaths</th>")

    for(i=0; i<data.Countries.length; i++) {
        document.write("<tr>")

        document.write("<td class='px-3 py-3'>" + data.Countries[i].Country +"</td>")
        document.write("<td>" + data.Countries[i].TotalConfirmed +"</td>")
        document.write("<td>" + data.Countries[i].NewConfirmed +"</td>")
        document.write("<td>" + data.Countries[i].TotalDeaths +"</td>")
        document.write("<td class='bg-danger'>" + data.Countries[i].NewDeaths +"</td>")

        document.write("</tr>")

    }

    document.write("</table>")
    
document.write("</div>")
document.write("<script src='js/jquery.min.js'></script>")
document.write("<script src='js/bootstrap.min.js'></script>")

document.write('</body>')
}