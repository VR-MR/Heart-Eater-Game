#pragma strict

public var speed = 1;

//private var rb: Rigidbody;
public var gameOverText: UI.Text;
public var gameMessageText: UI.Text;

// Viewが始まる時に呼ばれる関数
function Start() {
//	rb = GetComponent.<Rigidbody>();
	gameMessageText.text = "Let's GO!";
	yield WaitForSeconds (3);
	gameMessageText.text = "";
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
		gameMessageText.text = "";
		gameOverText.text = "Damaged!";
		// Time.timeScale = 0;
	};

	if(other.gameObject.CompareTag("Heart")){
		Debug.Log("You Heated!");
		other.gameObject.SetActive(false);
		gameMessageText.text = "You got it!";
		yield WaitForSeconds (1);
		gameOverText.text = "";
		gameMessageText.text = "";
	};
}