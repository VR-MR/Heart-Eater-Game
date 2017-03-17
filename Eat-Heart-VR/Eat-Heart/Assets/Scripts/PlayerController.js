#pragma strict

public var speed = 1;

private var rb: Rigidbody;
public var gameOverText: UI.Text;

// Viewが始まる時に呼ばれる関数
function Start() {
	rb = GetComponent.<Rigidbody>();
}

function FixedUpdate () {
	var moveHorizontal : float = Input.GetAxis("Horizontal");
	var moveVertical : float = Input.GetAxis("Vertical");
	var movement = Vector3(moveHorizontal, 0, moveVertical);

	transform.Translate(movement * 0.1 * speed);
}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.CompareTag("BlackHeart")){
		Debug.Log("You Heated!");
		other.gameObject.SetActive(false);
		gameOverText.text = "GameOver";
	};
}