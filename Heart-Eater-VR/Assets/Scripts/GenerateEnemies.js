#pragma strict

public var girl: GameObject;//  prefab
public var man: GameObject;//  prefab

public var interval: int;
private var timeT: float;
private var characterPositionXArray = new ArrayList();
private var whoWillGonnaBeRegen: boolean;

function Start () {
	whoWillGonnaBeRegen = true;
}

function Update () {
	timeT += Time.deltaTime;
	if (timeT > interval){
		Debug.Log ("Spawned");
		timeT = 0;
		var human: GameObject;
		// 7名を生成する
		if(characterPositionXArray.Count <= 6){
			if (whoWillGonnaBeRegen){
				human = GameObject.Instantiate(girl)as GameObject;
				whoWillGonnaBeRegen = false;
			}else{
				human = GameObject.Instantiate(man)as GameObject;
				whoWillGonnaBeRegen = true;
			}
			human.transform.position = getEnemyRandomPosition();
		}
	}
}

function getEnemyRandomPosition(){
	var position = this.gameObject.transform.position;
	var randomDiff = Random.Range(-5, 5);
	while(characterPositionXArray.Contains(randomDiff)){
		randomDiff = Random.Range(-5, 5);
	};

	position[0] += randomDiff;

	position[2] += randomDiff/10.0;

	characterPositionXArray.Add(randomDiff);

	return position;
}