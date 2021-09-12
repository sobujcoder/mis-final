function yearlyfees(x,y,a)
{
    x=x*12;
    let fee=(x+y);
    if(a>50 && fee>20000)
    {
       applicablefee= (x* 0.20);
    }

    let montlyfee=(y/12);
    if(a>30 && montlyfee>250)
    {
        applicablefee=(x*0.15);
    }
    else
    {
        applicablefee=0;
    }
    return applicablefee;
}

let Totalfee= yearlyfees(bills,fees,ages);