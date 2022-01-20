# Instal·lació

```bash 
npm install @acacha/casteaching
``` 

# Usage 

```javascript
import casteaching from '@acacha/casteaching'

// Obtenir llista de vídeos publicats
casteaching.videos()

// Obtenir vídeo per ID
casteaching.video.show(1)

// Crear video
casteaching.video.create({name: 'PHP 101', description: 'Bla bla bla',  url: 'https://youtube.com/...' })

// Update video
casteaching.video.update(1,{name: 'PHP 101', description: 'Bla bla bla',  url: 'https://youtube.com/...' })

// Destroy
casteaching.video.destroy(1)
```

# Autor

- Sergi Tur Badenas: https://acacha.github.io
- Instagram: https://instagram.com/acacha_dev
- Github: https://github.com/acacha

![image](https://user-images.githubusercontent.com/4015406/140644527-e186bf90-e556-4970-98ed-3f00c5f1af11.png)

# Codi font dels alumnes

- Audí Bielsa, Daniel: https://github.com/daudi44/TODO
- Avante Caballé, Marc: https://github.com/AvanteCaballe/casteaching_package
- Brusca Manchón, Albert: https://github.com/Albert-Brusca/TODO
- Goncear, Tudor: https://github.com/tgoncear/TODO
- Moreno Giraldo, Jhon: Jhon1348: https://github.com/Jhon1348/TODO
- Muñoz Zafra, Ferran | https://github.com/Fmunozzafra/TODO
- Pont Lopez, David: Palanka777: https://github.com/Palanka777/TODO.git
- Rius Rivas, Alba: AlbaRiius: https://github.com/AlbaRiius/TODO
- Tomas Altadill, Axel: AxelTomas99: https://github.com/AxelTomas99/TODO
- Gabriel Urs. Gabriel: l3lackJack https://github.com/l3lackJack/casteaching_package
- Tur Badenas, Sergi: Alumne DAM Prova: https://github.com/AlumneDAMPRova/TODO

# Paquet a npmjs

- Audí Bielsa, Daniel: TODO
- Avante Caballé, Marc: https://www.npmjs.com/package/@marcavante/casteachingavante
- Brusca Manchón, Albert: TODO
- Goncear, Tudor: TODO
- Moreno Giraldo, Jhon: TODO
- Pont Lopez, David: Palanka777: TODO
- Rius Rivas, Alba: TODO
- Tomas Altadill, Axel: TODO
- Muñoz Zafra, Ferran: TODO
- Urs, Gabriel: TODO
- Tur Badenas, Sergi: Alumne DAM Prova: https://www.npmjs.com/package/@acacha/casteaching

# More info
- https://github.com/acacha/casteaching
- https://github.com/acacha/casteaching_package

# Creació de repositori propi

- Scoped packages -> Prefix/espai de noms, evitar conflictes de noms -> @acacha/casteaching
- Moure a un repositori a part
- Actualitzar README
- Github submodules
