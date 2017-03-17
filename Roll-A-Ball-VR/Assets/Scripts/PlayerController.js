#pragma strict

// ここに変数をpublicにするとUnityEditor上で編集できます
public var speed = 1;
public var countText: UI.Text;
public var winText: UI.Text;

private var rb: Rigidbody;
private var count: int;

// Viewが始まる時に呼ばれる関数
function Start() {
	rb = GetComponent.<Rigidbody>();
	count = 0;
	SetCountText();
	winText.text = "";
}
// Frameごとに呼ばれる関数？
function FixedUpdate () {
	var moveHorizontal : float = Input.GetAxis("Horizontal");
	var moveVertical : float = Input.GetAxis("Vertical");

	var movement = Vector3(moveHorizontal, 0, moveVertical);

	rb.AddForce (movement * speed);
}
//PickUpとTag付けされた物体と衝突したらif文がTrueになる
function OnTriggerEnter (other : Collider) {
	if(other.gameObject.CompareTag ("PickUp")){
		Debug.Log("Yes!");
		other.gameObject.SetActive(false);
		count = count + 1;
		SetCountText();
	};
}

function SetCountText (){
	countText.text = "Count: " + count.ToString ();
	if (count >= 8){
        winText.text = "You Win!";
    }
}
