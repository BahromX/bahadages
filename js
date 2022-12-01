
let bugun = new Date();
console.log(bugun)
let oy = bugun.getMonth();
let real_oy = bugun.getMonth();
let yil = bugun.getFullYear();
let bugungi_kun = bugun.getDate();
let oylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr"];

console.log(oy);
calendar(yil,oy);

function calendar(yil, oy)
{
    let birinchi = new Date(yil,oy,1);
    let birinchi_kun = birinchi.getDay();

    if(birinchi_kun == 0)
    {
        birinchi_kun = 7;
    }

    let s = "<tr><td colspan='7' class='oylar'>"+ yil + "<br>" + oylar[oy] +"</td></tr><tr><td>D</td><td>S</td><td>Ch</td><td>P</td><td>J</td><td>Sh</td><td>Y</td></tr>"
    let kun = 1;

    let otkan_oy = oy-1;
    if(otkan_oy == -1)
    {
        otkan_oy = 11;
    }

    let oy_kunlari = [31,28,31,30,31,30,31,31,30,31,30,31];
    let otkan_oy_kuni = oy_kunlari[otkan_oy]-birinchi_kun+1;
    let finish = false;
    for(let i = 0; i<7; i++)
    {
        s += "<tr>";

        for(let j=0; j<7; j++)
        {
            if(j<birinchi_kun-1 && i == 0)
            {
                otkan_oy_kuni++;
                s += "<td class = 'keyingi'>"+ otkan_oy_kuni +"</td>";
                continue;
            }
            if(finish)
            {
                s += "<td class = 'keyingi'>"+ kun +"</td>";
            }
            else if(kun == bugungi_kun && oy == real_oy)
            {
                s += "<td class = 'bugun'>"+ kun +"</td>";
            }
            else
            {
                s += "<td>"+ kun +"</td>";
            }
            kun++;
            if(kun > oy_kunlari[oy])
            {
                finish = true;
                kun = 1;
            }
        }
        if(finish)
        {
            break;
        }
        s += "</tr>";
    }

    let kalendar = document.getElementById("kalendar");
    kalendar.innerHTML = s;
}

function previous()
{
    oy -= 1;
    if(oy == -1)
    {
        oy = 11;
        yil--;
    }
    calendar(yil,oy);
}

function next()
{
    oy += 1;
    if(oy == 12)
    {
        oy = 0;
        yil++;
    }
    calendar(yil,oy);
}
