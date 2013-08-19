function Vessel(name, position, capacity) {
    this.name     = name;
    this.position = position;
    this.capacity = capacity;
    this.onBoard  = 0;
}

Vessel.prototype.report = function () {
    var vessel   = 'Корабль "' + this.name + '". ',
        position = 'Местоположение: ' + this.position + '. ',
        occupied = 'Занято: ' + this.onBoard + ' из ' + this.capacity + 'т.';

    console.log(vessel + position + occupied);
}

Vessel.prototype.getFreeSpace = function () {
    return this.capacity - this.onBoard;
}

Vessel.prototype.getOccupiedSpace = function () {
    return this.onBoard;
}

Vessel.prototype.flyTo = function (newPosition) {
    this.position = newPosition.position;
}

Vessel.prototype.hasLanded = function (planet) {
    var vesselX = this.position[0],
        vesselY = this.position[1],
        planetX = planet.position[0],
        planetY = planet.position[0];

    if (vesselX === planetX && vesselY == planetY) {
        return true;
    } else {
        return false;
    }
}

function Planet(name, position, availableAmountOfCargo) {
    this.name     = name;
    this.position = position;
    this.availableAmountOfCargo = availableAmountOfCargo;
}

Planet.prototype.report = function () {
    var planet          = 'Планета "' + this.name + '". ',
        position        = 'Местоположение: ' + this.position + '. ',
        available       = this.availableAmountOfCargo,
        availabilityMes = available ? "Доступно груза: " + available + "т." : "Грузов нет.";

    console.log(planet + position + availabilityMes);
}

Planet.prototype.getAvailableAmountOfCargo = function () {
    return this.availableAmountOfCargo;
}

Planet.prototype.loadCargoTo = function (vessel, cargoWeight) {
    if (vessel.hasLanded(this)) {
        if (vessel.getFreeSpace() < cargoWeight) {
            var mes = 'На корабле ' + vessel.onBoard + 'т груза. '
                      + 'Грузоподъемность корабля ' + vessel.capacity +'т. '
                      + 'Вы не можете погрузить на борт больше ' + (vessel.capacity - vessel.onBoard) + 'т!';
            console.log(mes)
        } else {
            if (this.getAvailableAmountOfCargo() < cargoWeight) {
                console.log("На планете недостаточно груза!");
            } else {
                vessel.onBoard += cargoWeight;
                this.availableAmountOfCargo -= cargoWeight;
                console.log("Загрузка завершена");
            }
        }
    } else {
        console.log("Корабль не приземлился!");
    }
}

Planet.prototype.unloadCargoFrom = function (vessel, cargoWeight) {
    if (vessel.hasLanded(this)) {
        if (vessel.getOccupiedSpace() >= cargoWeight) {
            vessel.onBoard -= cargoWeight;
            this.availableAmountOfCargo += cargoWeight;
            console.log("Груз выгружен");
        } else {
            console.log("На корабле недостаточно груза!");
        }
    }
}