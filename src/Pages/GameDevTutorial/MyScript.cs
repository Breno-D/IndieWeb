using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MyScript : MonoBehaviour
{
    Rigidbody2D myRb;
    void Start()
    {
        myRb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.D))
        {
            myRb.velocity = new Vector2(1f,0f);
        }
        else if(Input.GetKeyDown(KeyCode.A))
        {
            myRb.velocity = new Vector2(-1f,0f);
        }
        else if(Input.GetKeyDown(KeyCode.W))
        {
            myRb.velocity = new Vector2(0f,1f);
        }
        else if(Input.GetKeyDown(KeyCode.S))
        {
            myRb.velocity = new Vector2(0f,-1f);
        }
        else
        {
            myRb.velocity = new Vector2(0f,0f);
        }
        Debug.Log(myRb.velocity);
    }
}
