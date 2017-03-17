#pragma strict

public var enemy: GameObject;// enemy prefab
public var interval: int;
private var timeT: float;
private var enemyLocationArray = [];

function Start () {
	
}

function Update () {
	timeT += Time.deltaTime;
	if (timeT > interval){
		Debug.Log ("Enemy spawned");
		timeT = 0;
		// enemyの複製
		var enemys = GameObject.Instantiate(enemy)as GameObject;
		// enemysの位置を調整
		enemys.transform.position = getEnemyRandomPosition();
	}
}

function getEnemyRandomPosition(){
	var position = this.gameObject.transform.position;
	position[0] += Random.Range( -10.0f, 10.0f );
	return position;
}