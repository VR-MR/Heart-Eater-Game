#pragma strict

public var scaleX: float;
public var scaleY: float;
public var scaleZ: float;

function Start () {
//	Debug.Log("This is dubug message.");
}

function FixedUpdate () {
	//var position = UnityEngine.VR.InputTracking.GetLocalPosition(UnityEngine.VR.VRNode.CenterEye);
	//Debug.Log(position);
	//transform.position = position * scale;
}

function Update () {
	var position = UnityEngine.VR.InputTracking.GetLocalPosition(UnityEngine.VR.VRNode.CenterEye);
	//Debug.Log(position);
	transform.position = Vector3(position[0] * scaleX, position[1] * scaleY, position[2] * scaleZ);
	//Debug.Log(transform.position);
}