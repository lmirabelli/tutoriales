class carFormat {
    constructor(ident, marca, modelo, ano, color, kilometros, precio, imagen){
        this.ident = ident,
        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano,
        this.color = color,
        this.kilometros = kilometros,
        this.precio = precio,
        this.imagen = imagen
    }
}

let carlist = []


carlist.push(new carFormat(1,'renault','12',1974,'azul',490000,900000,'https://i.ibb.co/5TH67px/800px-Renault-12-Argentina.jpg'))
carlist.push(new carFormat(2,'dodge','1500',1968,'blanco',680000,750000,'https://i.ibb.co/KctKYTr/45839761934-ce9a7e01e1-b.jpg'))
carlist.push(new carFormat(3,'peugeot','404',1972,'verde',580000,820000,'https://i.ibb.co/ypHbgMq/427467aee73d29cf74291897a67bda06.jpg'))
carlist.push(new carFormat(4,'ford','f100',1976,'verde',350000,1500000,'https://i.ibb.co/Yk4HFh3/2d029f33089c3ed98f4a6f403ac8e902.jpg'))
carlist.push(new carFormat(5,'ford','taunus',1971,'rojo',720000,1200000,'https://i.ibb.co/YPw3WBL/7d9544c55d5e89bc9a0968fff2f26063.jpg'))
carlist.push(new carFormat(6,'renault','fuego',1981,'rojo',420000,2500000,'https://i.ibb.co/DpXwFKn/list-renault-fuego.jpg'))
carlist.push(new carFormat(7,'peugeot','207',2009,'azul',190000,3500000,'https://i.ibb.co/7RRhDGf/1777a656dac8ca46e89e9fe5f416fb39.jpg'))
carlist.push(new carFormat(8,'alfa romeo','145',1998,'negro',256000,3150000,'https://i.ibb.co/d2qvD4M/350e8dcfe4b3440b19946c232905e580.jpg'))
carlist.push(new carFormat(9,'fiat','uno',1998,'negro',300000,1800000,'https://i.ibb.co/mRqJRsV/ca39e8520e9ef39580dca966cfb156a2.jpg'))
carlist.push(new carFormat(10,'fiat','600',1958,'blanco',850000,1000000,'https://i.ibb.co/Bt7gxMm/0eb54455d4328973fe54d452bc0aaf8f.jpg'))
