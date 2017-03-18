#pragma strict

function Start () {
	
}

function Update () {
	if (this.gameObject.transform.position[2] < - 10.0){
		Debug.Log("Destoy Heart");
		Destroy(this.gameObject);
	}
}
