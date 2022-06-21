function calculate() {
    var chi = '';
    let astro_sign = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);




    switch (year) {
        case 1924:
        case 1936:
        case 1948:
        case 1960:
        case 1972:
        case 1984:
        case 1996:
        case 2008:
        case 2020:
            chi = "Rat"
            break;
        case 1949:
        case 1961:
        case 1973:
        case 1985:
        case 1997:
        case 2009:
        case 2021:
            chi = "Ox"
            break;
        case 1950:
        case 1962:
        case 1974:
        case 1986:
        case 1998:
        case 2010:
        case 2022:
            chi = "Tiger"
            break;
        case 1951:
        case 1963:
        case 1975:
        case 1987:
        case 1999:
        case 2011:
        case 2023:
            chi = "Rabbit"
            break;
        case 1952:
        case 1964:
        case 1976:
        case 1988:
        case 2000:
        case 2012:
        case 2024:
            chi = "Dragon"
            break;
        case 1953:
        case 1965:
        case 1977:
        case 1989:
        case 2001:
        case 2013:
        case 2025:
            chi = "Snake"
            break;
        case 1954:
        case 1966:
        case 1978:
        case 1990:
        case 2002:
        case 2014:
        case 2026:
            chi = "Horse"
            break;
        case 1955:
        case 1967:
        case 1979:
        case 1991:
        case 2003:
        case 2015:
        case 2027:
            chi = "Goat"
            break;
        case 1956:
        case 1968:
        case 1980:
        case 1992:
        case 2004:
        case 2016:
        case 2028:
            chi = "Monkey"
            break;
        case 1957:
        case 1969:
        case 1981:
        case 1993:
        case 2005:
        case 2017:
        case 2029:
            chi = "Rooster"
            break;
        case 1958:
        case 1970:
        case 1982:
        case 1994:
        case 2006:
        case 2018:
        case 2030:
            chi = "Dog"
            break;
        case 1959:
        case 1971:
        case 1983:
        case 1995:
        case 2007:
        case 2019:
        case 2031:
            chi = "Pig"
            break;
        default:
            chi = "That year is not included in my list.";
    }



    function zodiac_sign(date, month) {


        if (month == "december") {

            if (date < 22)
                astro_sign = "Sagittarius";
            else
                astro_sign = "capricorn";
        } else if (month == "january") {
            if (date < 20)
                astro_sign = "Capricorn";
            else
                astro_sign = "aquarius";
        } else if (month == "february") {
            if (date < 19)
                astro_sign = "Aquarius";
            else
                astro_sign = "pisces";
        } else if (month == "march") {
            if (date < 21)
                astro_sign = "Pisces";
            else
                astro_sign = "aries";
        } else if (month == "april") {
            if (date < 20)
                astro_sign = "Aries";
            else
                astro_sign = "taurus";
        } else if (month == "may") {
            if (date < 21)
                astro_sign = "Taurus";
            else
                astro_sign = "gemini";
        } else if (month == "june") {
            if (date < 21)
                astro_sign = "Gemini";
            else
                astro_sign = "cancer";
        } else if (month == "july") {
            if (date < 23)
                astro_sign = "Cancer";
            else
                astro_sign = "leo";
        } else if (month == "august") {
            if (date < 23)
                astro_sign = "Leo";
            else
                astro_sign = "virgo";
        } else if (month == "september") {
            if (date < 23)
                astro_sign = "Virgo";
            else
                astro_sign = "libra";
        } else if (month == "october") {
            if (date < 23)
                astro_sign = "Libra";
            else
                astro_sign = "scorpio";
        } else if (month == "november") {
            if (date < 22)
                astro_sign = "scorpio";
            else
                astro_sign = "sagittarius";
        }


    }


    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("zodiac").innerHTML = "Your Astrological zodiac sign is: " + astro_sign;
}