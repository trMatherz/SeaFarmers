#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    string a, b, c; int x, y, z;
    cin >> a >> x >> b >> y >> c >> z; 
    if(x > y && x > z) { //check if x is the biggest
        cout << a;
    } else if(y > z) { //check if y is the biggest
        cout << b;
    } else cout << c;  //else c is the biggest
    return 0;
}
