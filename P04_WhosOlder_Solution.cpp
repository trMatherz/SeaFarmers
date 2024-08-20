#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int a, b; //declare the variables
    cin >> a >> b; //read in the variables
    if(a > b) { //check if Mark is older
        cout << "Mark";
    } else if(a < b) { //check if Jerry is older
        cout << "Jerry"; 
    } else { //if neither is older, they are the same age
        cout << "You're the same age!";
    }
    return 0;
}