let player;
let counterTop;
let microwave;

let kitchenObjects;
let kitchenClutter;

const counterHeight = 40;

const GRAVITY = 1;
const JUMP = 15;
const ACCELERATION = 10;
const MAX_SPEED = 10;
const FRICTION = 1;

function preload() {

}

function setup() {
    createCanvas(windowWidth, windowHeight);

    player = createSprite(0, 0, 100, 100);
    player.setDefaultCollider();

    counterTop = createSprite(width / 2, height, width, counterHeight);
    counterTop.setDefaultCollider();

    microwave = createSprite(width / 2 + 400, height - 60, 100, 80);
    microwave.setDefaultCollider();

    kitchenObjects = new Group();
    kitchenObjects.add(counterTop);
    kitchenObjects.add(microwave);

    kitchenClutter = new Group();
    kitchenClutter.add(microwave);

}

function draw() {
    clear();

    applyMovement();

    drawSprites();
}

function applyMovement() {

    player.velocity.y += GRAVITY;

    player.velocity.x = 0;

    if (player.collide(kitchenObjects)) {
        player.velocity.y = 0;
    }

    if (keyWentDown('space') && player.position.y > 0 && player.overlap(kitchenObjects)) {
        player.velocity.y = -JUMP;
    }
    if (
        (
            keyDown('a') || keyDown(LEFT_ARROW)
        ) &&
        player.position.x > 0
    ) {
        player.velocity.x = -MAX_SPEED;
    } else if ((
        keyDown('d') || keyDown(RIGHT_ARROW)
    ) &&
        player.position.x < width
    ) {
        player.velocity.x = MAX_SPEED;
    }

}
