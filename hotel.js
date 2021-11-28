// const roomSize = document.getElementById('room-size') as HTMLInputElement;
// const capacity = document.getElementById('capacity') as HTMLInputElement;
// const poolSize = document.getElementById('pool-size') as HTMLInputElement;
// const waterTemp = document.getElementById('watertemp') as HTMLInputElement;
// const btn = document.querySelector('button') as HTMLButtonElement;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hotel = /** @class */ (function () {
    function Hotel(name, address, stars) {
        this.rooms = [];
        this.name = name;
        this.address = address;
        this.stars = stars;
    }
    Hotel.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    //printing all information of rooms if comfort level is higher than 15
    Hotel.prototype.printRooms = function (minComfort) {
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.comfort() > minComfort ||
                minComfort === undefined) {
                room.printData();
            }
        }
    };
    Hotel.prototype.printData = function (onlyComfort) {
    };
    return Hotel;
}());
var Room = /** @class */ (function () {
    function Room(size, capacity) {
        this.size = size;
        this.capacity = capacity;
    }
    //how many people can stay per room size, value has to be returned
    Room.prototype.comfort = function () {
        var comfortRoom = this.size / this.capacity;
        return comfortRoom;
    };
    //print room size and capacity information
    Room.prototype.printData = function () {
        console.log('');
        console.log('----ROOM----');
        console.log("Room size: ".concat(this.size, " m2"));
        console.log("Capacity: ".concat(this.capacity));
        console.log("Comfort level: ".concat(this.comfort().toFixed(0)));
    };
    return Room;
}());
var Spa = /** @class */ (function (_super) {
    __extends(Spa, _super);
    function Spa(size, capacity, poolSize, poolTemperature) {
        var _this = _super.call(this, size, capacity) || this;
        _this.poolSize = poolSize;
        _this.poolTemperature = poolTemperature;
        return _this;
    }
    //how many people can stay per room size, value has to be returned
    Spa.prototype.comfort = function () {
        var comfortRoomPool = (this.size - this.poolSize) / this.capacity;
        return comfortRoomPool;
    };
    Spa.prototype.printData = function () {
        _super.prototype.printData.call(this); // adds Room attributes
        console.log("Pool size: ".concat(this.poolSize));
        console.log("Temperature: ".concat(this.poolTemperature, " (C)"));
    };
    return Spa;
}(Room));
var room1 = new Room(40, 3);
var room2 = new Room(80, 2);
var spa1 = new Spa(120, 2, 20, 2);
var hotel = new Hotel("Oracle", "57th avenue", 4);
hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.printRooms(15);
// //test room objects
// room1.printData();
// room2.printData();
// spa1.printData();
