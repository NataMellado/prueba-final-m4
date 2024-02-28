class Animal {
    constructor(name, age, img, comment, sound) {
        this.name = name;
        this.age = age;
        this.img = img;
        this.comment = comment;
        this.sound = sound;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getComment() {
        return this.comment;
    }
    
    getImg() {
       return this.img;
    }

    getSound() {
        return this.sound;
    }

    // crear tarjeta de animal con el nombre, imagen y sonido
    createCard() {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = this.getImg();

        const name = document.createElement('p');
        name.classList.add('card-title');
        name.textContent = this.getName();

        const sound = document.createElement('audio');
        sound.src = this.getSound();
        sound.setAttribute('controls', '');

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(sound);

        return card;
    }

    // crear tarjeta para modal con la imagen, edad y comentario
    createModalCard() {
        const modalCard = document.createElement('div');
        modalCard.classList.add('modal-card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = this.getImg();

        const age = document.createElement('p');
        age.classList.add('card-text');
        age.textContent = `Edad: ${this.getAge()}`;

        const comment = document.createElement('p');
        comment.classList.add('card-text');
        comment.textContent = this.getComment();

        modalCard.appendChild(img);
        modalCard.appendChild(age);
        modalCard.appendChild(comment);

        return modalCard;
    }
}



// leon
class Leon extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }

    rugir() {
        return this.getSound();
    }
}

// lobo
class Lobo extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }

    aullar() {
        return this.getSound();
    }
}

// oso
class Oso extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }

    gruñir() {
        return this.getSound();
    }
}

// serpiente
class Serpiente extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }

    sisear() {
        return this.getSound();
    }
}

// aguila
class Aguila extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }

    chillar() {
        return this.getSound();
    }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };
