// const roomSize = document.getElementById('room-size') as HTMLInputElement;
// const capacity = document.getElementById('capacity') as HTMLInputElement;
// const poolSize = document.getElementById('pool-size') as HTMLInputElement;
// const waterTemp = document.getElementById('watertemp') as HTMLInputElement;
// const btn = document.querySelector('button') as HTMLButtonElement;

class Hotel {
    public readonly name: string;
    public readonly address: string;
    public readonly stars: number;
    public readonly rooms: Room[] = [];

    constructor(name: string, address: string, stars: number) {
        this.name = name;
        this.address = address;
        this.stars = stars;
    }

    public addRoom(room: Room) : void {
        this.rooms.push(room);
    }

    //printing all information of rooms if comfort level is higher than 15
    printRooms(minComfort?: number) :void {
        for (let room of this.rooms) {
            if(room.comfort() > minComfort || 
               minComfort === undefined ) {
                room.printData();
            }
       }
    }

    public printData(onlyComfort?: boolean): void {

    } 
}

class Room {
    public size: number;
    public capacity: number;

    constructor(size: number, capacity: number) {
        this.size = size;
        this.capacity = capacity
    }

    //how many people can stay per room size, value has to be returned
    public comfort(): number {
        let comfortRoom = this.size / this.capacity;
        return comfortRoom;
    }

    //print room size and capacity information
    public printData(): void {
        console.log('');
        console.log('----ROOM----');
        console.log(`Room size: ${this.size} m2` );
        console.log(`Capacity: ${this.capacity}`);
        console.log(`Comfort level: ${this.comfort().toFixed(0)}`);   
    }
}

class Spa extends Room {
    public poolSize: number;
    public poolTemperature: number;
    
    constructor(size: number, capacity: number, poolSize: number, poolTemperature: number) {
        super(size, capacity);
        this.poolSize = poolSize;
        this.poolTemperature = poolTemperature;
    }

    //how many people can stay per room size, value has to be returned
    public comfort(): number {
        let comfortRoomPool = (this.size -this.poolSize) / this.capacity;
        return comfortRoomPool;
    }

    public printData(): void {
        super.printData();              // adds Room attributes
        console.log(`Pool size: ${this.poolSize}`);
        console.log(`Temperature: ${this.poolTemperature} (C)`);
    }
}

const room1: Room = new Room(40, 3);
const room2: Room = new Room(80, 2);
const spa1: Spa = new Spa(120, 2, 20, 2);

const hotel: Hotel = new Hotel("Oracle", "57th avenue", 4);

hotel.addRoom(room1)
hotel.addRoom(room2)
hotel.printRooms(15);

// //test room objects
// room1.printData();
// room2.printData();
// spa1.printData();
