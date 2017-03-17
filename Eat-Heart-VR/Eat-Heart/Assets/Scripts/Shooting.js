#pragma strict

private var player: GameObject;// player location
public var bullet: GameObject;// bullet prefab
public var bulletStartPoint: Transform;// 弾丸発射点
public var interval: int;
private var timeT: float;
public var speed = 100;// 弾丸の速度

function Start () {
	player = GameObject.FindGameObjectsWithTag("Player")[0];
}

function Update () {
	timeT += Time.deltaTime;
	if (timeT > interval){
		Debug.Log ("Shoot heart");
		timeT = 0;
		// 弾丸の複製
		var bullets = GameObject.Instantiate(bullet)as GameObject;
		var force: Vector3;

		force = decideBulletDirection() * speed;
		// Rigidbodyに力を加えて発射
		bullets.GetComponent.<Rigidbody>().AddForce(force);
		// 弾丸の位置を調整
		bullets.transform.position = bulletStartPoint.position;
	}

}

function decideBulletDirection(){
	var vector = (player.transform.position + Vector3(Random.Range( -1.0f, 1.0f ), Random.Range( -1.0f, 1.0f ), Random.Range( -1.0f, 1.0f ))) - this.gameObject.transform.position;
//	Debug.Log(vector);
	vector /= Mathf.Sqrt(vector[0]*vector[0] + vector[1]*vector[1] + vector[2]*vector[2]);
//	Debug.Log(vector);
	return vector;
}