using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class bulletMove : MonoBehaviour {

	Vector3 getPlayerPosition () {
		return Camera.main.transform.position;
	}

	Vector3 randomPosition (Vector3 center, float varX, float varY) {
		return new Vector3 (center.x + Random.Range (0f, 1f) * varX, center.y + Random.Range (0f, 1f) * varY, center.z);
	}

	Vector3 calcForce(Vector3 from, Vector3 to, float mag) {
		Vector3 f = (to - from);
		return f * mag;
	}

	// Use this for initialization
	void Start () {
		Rigidbody rb = GetComponent<Rigidbody> ();
		Vector3 pos = getPlayerPosition ();
		Vector3 targetPos = randomPosition (pos, 3, 3);
		print (pos);
		print (targetPos);
		print (transform.position);
		print (targetPos - transform.position);
		Vector3 force = calcForce (transform.position, targetPos, 90);
		rb.AddForce (force);
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}