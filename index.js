var xml = new XMLHttpRequest;

function csvWrite(firstName, lastName) {
    xml.open;

    xml.send('GET', 'csvHandler.php?firstName=' + firstName + '&lastName=' + lastName);

    xml.onreadystatechange = () => {
        document.getElementById('body').innerHTML = xhr.resposeText;
    }
}