#pragma strict

public var scale: Number = 3;

function Start () {
	Debug.Log("This is dubug message.");
}
// Frameごとに呼ばれる関数？
function FixedUpdate () {
	//var position = UnityEngine.VR.InputTracking.GetLocalPosition(UnityEngine.VR.VRNode.CenterEye);

	//Debug.Log(position);

	//transform.position = position * scale;
}

function Update () {
	var position = UnityEngine.VR.InputTracking.GetLocalPosition(UnityEngine.VR.VRNode.CenterEye);

	Debug.Log(scale);
	var cameraTransform = GetComponent.<Transform>();
	cameraTransform.position = position * scale;
	Debug.Log(cameraTransform.position);
}